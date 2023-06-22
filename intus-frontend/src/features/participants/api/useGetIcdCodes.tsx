// https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code&df=code,name&terms=C53

import { useState, useEffect } from "react";

// could be replaced by react-query
// quick and dirty fetch in the meantime
export const useGetIcdCodes = (id: number | undefined) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{
    name: string;
    translations: { code: string; name: string }[];
  }>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`http://localhost:5000/participant/${id}`)
        .then((response) => {
          return response.json();
        })
        .then(({ firstName, lastName, diagnoses = [] }) => {
          const requests = diagnoses.map(
            async ({ icdCode }: { icdCode: string }) => {
              const response = await fetch(
                `https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code&df=code,name&terms=${icdCode}`
              );
              return response.json();
            }
          );

          Promise.all(requests).then((values) => {
            const translations = values.map((value, index) => {
              let name = "";

              if (value[3] && value[3][0] && value[3][0][1]) {
                name = value[3][0][1];
              }

              return { code: diagnoses[index].icdCode, name };
            });

            setData({
              name: `${firstName} ${lastName}`,
              translations: translations,
            });
            setLoading(false);
          });
        })
        .catch(() => setError(true));
    }
  }, [id]);

  return { loading, data, error };
};

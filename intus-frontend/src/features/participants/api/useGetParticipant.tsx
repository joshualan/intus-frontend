import { useState, useEffect } from "react";

// could be replaced by react-query
// quick and dirty fetch in the meantime
export const useGetParticipant = (id: number | undefined) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/participant/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((participant) => {
          setLoading(false);
          setData({
            id: participant.id,
            name: `${participant.firstName} ${participant.lastName}`,
            codes: (participant.diagnoses || []).length,
            diagnoses: participant.diagnoses,
          });
        })
        .catch((e) => {
          setError(e);
          setLoading(false);
        });
    }
  }, []);

  return { loading, data, error };
};

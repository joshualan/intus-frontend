// https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code&df=code,name&terms=C53

import React, { useState, useEffect } from "react";
// could be replaced by react-query
// quick and dirty fetch in the meantime
export const useGetIcdNames = ({ codes }: { codes: string }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/participants")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }, []);

  return { loading, data, error };
};

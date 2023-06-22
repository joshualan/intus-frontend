import { useState, useEffect } from "react";
// could be replaced by react-query
// quick and dirty fetch in the meantime

export type Participant = {
  id: number;
  name: string;
  codes: number;
  diagnoses: {
    icdCode: string;
    timestamp: string;
  }[];
};

export const useGetParticipants = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Participant[]>();
  const [error, setError] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/participants")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const participants = json.map((participant: any = {}) => {
          return {
            id: participant.id,
            name: `${participant.firstName} ${participant.lastName}`,
            codes: (participant.diagnoses || []).length,
            diagnoses: participant.diagnoses,
          };
        });

        setLoading(false);
        setData(participants);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, []);

  return { loading, data, error };
};

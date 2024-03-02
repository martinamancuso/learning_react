import { useState } from "react";

export function useCurrentLocation() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function calculateCurrentLocation() {
    setLoading(true);
    
    setTimeout(() => {
      try {
        setCurrentLocation(5);
      } catch (error) {
        setError(error);
      } finally {
        // il finally viene chiamato a prescindere dal fatto che la funzione
        // sia finita nel catch o no
        setLoading(false);
      }
    }, 1000);
  }

  return {
    currentLocation,
    error,
    loading,
    calculateCurrentLocation
  };
}

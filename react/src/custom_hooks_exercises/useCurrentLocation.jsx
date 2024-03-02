import { useState } from "react";

export function useCurrentLocation() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function calculateCurrentLocation() {
    setLoading(true);
  
     /* geolocation is available */
    if ("geolocation" in navigator) {
      /* 
        To obtain the user's current location, you can call the 
        getCurrentPosition() method. This initiates an asynchronous 
        request to detect the user's position. 
        It accepts 2 callback functions ('getCurrentPosition', funzione anonima (error)).
        When the position is determined, the first callback 
        function is executed. You can optionally provide a second 
        callback function to be executed if an error occurs.
      */
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
        setLoading(false);
      }, (error) => {
        setError(error)
        setLoading(false);
      }); 
    /* geolocation is unavailable */     
    } else {
      setError(new Error("Geolocation unavailable"));
      setLoading(false);
    }
  }

  return {
    currentLocation,
    error,
    loading,
    calculateCurrentLocation
  };
}

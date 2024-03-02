import { useCurrentLocation } from "../custom_hooks_exercises/useCurrentLocation"

export function CurrentLocation() {

  const { currentLocation, error, loading, calculateCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <h1>Current Location</h1>
      {currentLocation && <p>Your current location is: {currentLocation}</p>}
      {error && <p>There has been an error.</p>}
      {loading && <p>Loading...</p>}
      <p><button onClick={calculateCurrentLocation}>Calculate current location</button></p>
    </div>
  )
}
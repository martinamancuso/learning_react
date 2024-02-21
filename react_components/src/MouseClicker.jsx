export function MouseClicker() {
  function showEventTarget(event) {
    console.log(event.target.name);
  }

  function showSrcImg(event) {
    event.stopPropagation();
    console.log(event.target.src)
  }

  return (
    <div>
      <button name="one" onClick={showEventTarget}>
        Button!
        <br />
        <img onClick={showSrcImg} src="https://placekitten.com/200/300" alt="cat" />
      </button>
    </div>
  );
}

//

// export function MouseClicker() {
//   function handleButtonClick(event) {
//     console.log(event.target, event.currentTarget)
//   }

//   return (
//     <button onClick={handleButtonClick}>Click me!</button>
//   )
// }

export default function Clock({ time }) {
    let hours = time.getHours();
    let comprube = (hours >= 0 && hours <= 6) ? 'night' : 'day'
    return (
      <h1 id="time" class={comprube}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  
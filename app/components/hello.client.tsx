"use client"


function Hello() {
  console.log("I am a Client Component");

  return (
    <div>
      <h1>Server Components are rendered only on the server side, while Client Components are pre-rendered on the server to create a static shell and then hydrated on the client side.

This means that everything within the Client Component that does not require interactivity or is not  dependent on the browser is rendered on the server. The code or parts that rely on the browser or require interactivity are left as placeholders during server-side pre-rendering. When this reaches the client, the browser renders the Client Components and fills in the placeholders left by the server.</h1>
    </div>
  );
}

export default Hello;
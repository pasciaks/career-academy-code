export const greeting = () => {
  console.log(`(greeting) Hello`);
  return `Hello`;
}

export const informalGreeting = (name) => {
  console.log(`(informal) Hi ${name}`);
  return `Hi ${name}`;
}

export const formalGreeting = (name) => {
  console.log(`(formal) Greetings ${name}`);
  return `Greetings ${name}`;
}

export const casualGreetings = (name) => {
  console.log(`(casual) Hey ${name}`);
  return `Hey ${name}`;
}

export default greeting;

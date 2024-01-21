if (typeof document !== 'undefined') {
    const greeting: string = 'Hello, TypeScript on the client!';
    document.querySelector('h1')!.textContent = greeting;
  }
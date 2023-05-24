const bilder = {
  fotografie: [
    {
        type: "fotografie",
        author: "Taru Huhkio",
        title: "Buntstifte",
        size: "80x80",
        image:
          "https://images.unsplash.com/photo-1535340582796-799448c62e08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      },
      {
        type: "fotografie",
        author: "Dusan Kipic",
        title: "Skizzen",
        size: "100x80",
        image:
          "https://images.unsplash.com/photo-1589637458063-7b054f0c18ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        type: "fotografie",
        author: "Samuel Castro",
        title: "Black&White",
        size: "100x80",
        image:
          "https://images.unsplash.com/photo-1457295767206-0cb0658056cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      },
      {
        type: "fotografie",
        author: "Elena Mozhvilo",
        title: "Schmetterling",
        size: "80x80",
        image:
          "https://images.unsplash.com/photo-1590853566724-83bc9da30d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
      },
    ],
    kunst: [
      {
        type: "kunst",
        author: "Jene Stephaniuk",
        title: "Abstrakte",
        size: "120x80",
        image:
          "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      },
      {
        type: "kunst",
        author: "Steve Johnson",
        title: "Acrylfarbe",
        size: "100x80",
        image:
          "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80",
      },
      {
        type: "kunst",
        author: "Gabriela Gomez",
        title: "Wand Malarei",
        size: "120x80",
        image:
          "https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80",
      },
      {
        type: "kunst",
        author: "Felix Robert",
        title: "Bunte Fenster",
        size: "100x80",
        image:
          "https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      },
    ],
    graffiti: [
      {
        type: "graffiti",
        author: "Alp Ancel",
        title: "Aliens",
        size: "100x80",
        image:
          "https://images.unsplash.com/photo-1581850518616-bcb8077a2336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        type: "graffiti",
        author: "Ben Elwood",
        title: "Sprays",
        size: "80x80",
        image:
          "https://images.unsplash.com/photo-1512952398228-c6bda07ac7b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        type: "graffiti",
        author: "John Rodenn",
        title: "Time",
        size: "100x80",
        image:
          "https://images.unsplash.com/photo-1576096876569-0cffb1b1268d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
      },
      {
        type: "graffiti",
        author: "Paolo Bendandi",
        title: "Elefant",
        size: "100x80",
        image:
          "https://images.unsplash.com/photo-1571596825787-640e72bbb2f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      },
  ],
};
const bilderData = JSON.stringify(bilder);
export { bilderData };

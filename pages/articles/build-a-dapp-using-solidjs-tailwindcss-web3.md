---
layout: articleLayout
title: Build a Dapp using SolidJS, TailwindCSS & Web3
description: Build a Dapp using SolidJS, TailwindCSS & Web3
date: 2023-05-17T20:56:29.438Z
thumbnail: assets/erol-ahmed-fty5vsgifiq-unsplash.jpg
author: Michael Dabydeen
authorTwitter: "@_firelinks"
---
I recently discovered SolidJS after watching this 100 Seconds video.

SolidJS is a performance-focused reactive framework for building user interfaces.

The framework looks very interesting to me so I decided to try it out for myself. I have been working with React.js for the past 4 years, and SolidJS seems like it uses similar patterns.

The way that I like to learn new frameworks is to start building a project using it. So I have decided to build a simple Decentralized App (DApp) using SolidJS, TailwindCSS & Web3.js libraries.

I have documented the steps taken in this guide to help you get started.

Before getting started, this guide assumes that you have the following software installed:

Node.js- cross-platform JavaScript runtime environment

Metamask - browser-based software wallet for cryptocurrencies.

Yarn - (alternative) package manager for Node.js

Here's a basic outline for the approach for building a DApp using SolidJS, TailwindCSS, and Web3:

Install SolidJS and TailwindCSS by following the instructions on their respective websites.

Create a new project using SolidJS and initialize TailwindCSS in your project by running the appropriate commands.

Install Web3 and any other necessary libraries, such as ethers.js, by running npm install or yarn add and specifying the libraries you want to install.

Create a new file for your DApp, and import SolidJS, TailwindCSS, and Web3 at the top of the file.

Use SolidJS to create a component for your DApp that contains the HTML, CSS, and JavaScript necessary to build your application. You can use TailwindCSS to add styles to your component, and Web3 to interact with the Ethereum blockchain.

Use Web3 to connect to the Ethereum network and access the blockchain. You can use Web3's methods and properties to read and write data to the blockchain, as well as interact with smart contracts and other blockchain-based applications.

Test your DApp locally to make sure it's working as expected, and then deploy it to the Ethereum network so that it can be used by others.

Keep in mind that this is just a basic outline, and there are many different ways you could build a DApp using SolidJS, TailwindCSS, and Web3. The specific details of your DApp will depend on what you're trying to build, so you may need to adjust the steps above to fit your specific needs.

The following are the steps to achieve this goal:

Install & Setup SolidJS

Install & Setup TailwindCSS for SolidJS

Install & Setup Web3.js

Configure Infura provider

Add .env variables to SolidJS

Build UI to connect to the blockchain and display the current block number

Install & Setup SolidJS
Getting started with SolidJS is easy. To get started run the following command from your command line terminal


npx degit solidjs/templates/js solidjs-web3-demo
you can replace solidjs-web3-demo with an appropriate name for your project.

Or for TypeScript:

npx degit solidjs/templates/ts solidjs-web3-demo
Then, navigate to your application folder


cd solidjs-web3-demo/
Install the node dependencies


yarn install
To run your project


yarn run dev
Install & Setup TailwindCSS for SolidJS
Install TailwindCSS


yarn add -D tailwindcss postcss autoprefixer
Initialize the Tailwindcss setup.

npx tailwindcss init -p
This command will create a tailwind.config.js file in your root directory. Modify this file to add the path of all your template files

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
Import the @tailwind directives for each layer into your main CSS file, usually in ./src/index.css


@tailwind base;
@tailwind components;
@tailwind utilities;
Install & Setup Web3.js

yarn add web3
Configure Infura provider
To connect to the blockchain and use its APIs, we would need to connect to a node. At this point, we can choose to set up a node of our own, or use an existing service. That's where Infura comes in handy.

Infura is a powerful suite of high-availability blockchain APIs and developer tools that empower developers to build applications.

To get started, set up an account, and create an API Key

Add .env variables to SolidJS
Create an .env.dev file

INFURA_KEY=<YOUR INFURA KEY HERE>
Build UI to connect to & display the wallet

Now edit your `src/App.jsx` file and add the following lines of code:

import {  createSignal, createEffect } from 'solid-js';
import './index.css'; // Import TailwindCSS styles
import Web3 from 'web3';

const myDApp = () => {
  const [wallet, setWallet] = createSignal("")
  const [blockNumber, setBlockNumber] = createSignal(null);
  const provider = `https://mainnet.infura.io/v3/${import.meta.env.INFURA_KEY}`;

  // Connect to the Ethereum network
  const web3 = new Web3(new Web3.providers.HttpProvider(provider)
);

// Connect to your metamask wallet. 
  const handleWallet = async () => {
    if (ethereum) {
      await ethereum.request({ method: "eth_requestAccounts" });
      window.web3 = new Web3(ethereum);

      setWallet(window.web3.currentProvider.selectedAddress)
    } else {
      alert('Metamask not found?')
    }
  }

  // Use Web3 to read data from the blockchain

  createEffect(() => {
    web3.eth.getBlockNumber().then((result) => setBlockNumber(result));
  }, []);

  return (
    <div class="container mx-auto mt-6">
      <h1 class="text-2xl font-bold">My DApp</h1>
      <p>Current block number: {blockNumber}</p>
      <div>
        <button onClick={handleWallet}>Connect Wallet</button>
        <div>my wallet: {wallet}</div>
      </div>
    </div>
  );
};

// Render the DApp component
export default myDApp;
# React Native Template with Expo Router, React Native Paper, and Tailwind CSS

This template provides a clean setup for starting a React Native project with the following features:

- **Expo Router** for file-based navigation.
- **React Native Paper** for built-in Material Design components.
- **Tailwind CSS** with NativeWind for utility-first styling.

## Prerequisites

Ensure you have the following installed:

- **Node.js** and **npm**
- **Expo CLI**: Install with `npm install -g expo-cli`

## Getting Started

1. Clone the repository and navigate into the project directory:

   ```bash
   git clone <repository-url>
   cd <project-directory>

Install the dependencies:
```
npm install
```
Start the development server:
```
npx expo start
```
```
.
├── app
│   ├── index.js       # Main entry point
│   └── (tabs)         # Tab-based navigation folder
│       ├── bills
│       │   ├── bills.jsx
│       │   └── [id].jsx
│       └── _layout.jsx  # Layout for tab navigation
├── tailwind.config.js  # Tailwind CSS configuration
└── App.js              # Main app component

```

# Features
## Expo Router
This template uses Expo Router to enable file-based routing. Example routes:

`/bills: Displays the list of bills.`
`/bills/1: Shows the details of the bill with ID 1.`

In the app/index.js file, navigation can be handled with the Link component from Expo Router:
```
import { Link } from 'expo-router';

<Link href="/bills">Jump to bills</Link>
```
# React Native Paper
### This template integrates React Native Paper for Material Design components. The ActivityIndicator component is used in app/index.js:
```
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

<ActivityIndicator animating={true} color={MD2Colors.red800} />
```

# Tailwind CSS (NativeWind)
#### Tailwind CSS is configured with NativeWind for styling using utility classes. The configuration is in tailwind.config.js:
```
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',  // Manually control dark mode with class
};
```
Example usage in app/index.js:
```
import { View, Text } from 'react-native';

<View className="flex-1 items-center justify-center bg-white">
  <Text className="text-blue-500 underline">Jump to bills</Text>
</View>
```

## Installation and Configuration
1. Expo Router
Expo Router is already included in this template. You can add new screens in the app folder, and they will automatically be added to the navigation.

2. React Native Paper
React Native Paper is installed and ready to use. To install additional components, refer to React Native Paper documentation.

3. Tailwind CSS (NativeWind)
NativeWind is configured to use Tailwind CSS. Modify tailwind.config.js to adjust themes, colors, or add custom configurations.

## Dependencies
The main dependencies used in this template:

`Expo Router`: npm install expo-router
`React Native Paper`: npm install react-native-paper
`NativeWind`: npm install nativewind
`Tailwind CSS`: npm install tailwindcss
Sample Code
Here’s the code for app/index.js:
```
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import * as React from 'react';

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text>This file in app/index.js</Text>
      <Link href="/bills">
        <Text className="text-blue-500 underline">Jump to bills</Text>
      </Link> 
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
      <StatusBar style="auto" />
    </View>
  );
}
```

    This README file provides a structured overview, setup instructions, and code examples for get
  
## Analog Clock with Random Mood Display

A virtual reproduction of my Swatch analog watch with a random mood option on load, utilizing JavaScript's Date object for time and chronometer functionality, and calculating rotation angles for the clock hands.

## Table of Contents

- [Demo](#demo)
- [Description](#description)
- [Features](#features)
- [Challenges Faced](#challenges-faced)
- [Solutions Applied](#solutions-applied)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [License](#license)

## Demo

### Live Demo

Check out the live demo [here](https://nada-tb.github.io/Analog-Clock-with-Random-Mood-Display/).

## Description

This project is a virtual reproduction of my Swatch analog watch. It features a real-time clock and a random mood display on load. The clock hands are animated using JavaScript's Date object to get the current time, and the rotation angles for the clock hands are calculated to reflect the correct time.

## Features

- Real-time clock with hour, minute, and second hands.
- Random mood display on page load.
- Accurate angle calculation for clock hands based on the current time.
- CSS animations for smooth clock hand movements.

## Challenges Faced

1. **Angle Calculation:** Calculating the angles for the clock hands based on the current time.
2. **CSS Position and Animation:** Leveraging CSS for positioning and animating the clock hands.
3. **Conditional Logic:** Adjusting the angle for hours when the minutes' angle is greater than 180 degrees.
4. **Clock Design:** Implementing a circular clock design.

## Solutions Applied

1. **Angle Calculation:** Used specific angles for hours, minutes, and seconds to calculate the clock hands' positions.
2. **CSS Position and Animation:** Utilized CSS for positioning and animating the clock hands, creating a dynamic and engaging visual.
3. **Conditional Logic:** Applied conditional logic to adjust the hour hand's angle based on the minutes' angle.
4. **Clock Design:** Designed a circular clock using CSS, demonstrating both design and coding skills.

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Nada-TB/Analog-Clock-with-Random-Mood-Display.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Analog-Clock-with-Random-Mood-Display
   ```

3. **Open the `index.html` file in your web browser:**

   - Double-click the `index.html` file.
   - Alternatively, you can open it through your browser's "Open File" option.

## Usage

1. **Open the Web Application:**
   - Open the `index.html` file in your web browser.

2. **View the Clock:**
   - Observe the real-time clock hands moving to reflect the current time.
   - Note the random mood displayed in the input field.

## Project Structure

Outline of the project directory:

```plaintext
virtual-swatch-analog-watch/  
├── style.css                      # Main CSS file
├── app.js                         # JavaScript functionality
├── index.html                     # Main HTML file
└── README.md                      # Project documentation
```

## Future Improvements

- Add more mood options to the random mood display.
- Enhance the clock design with more detailed features.
- Add user interaction to set alarms or timers.

## Contact

For any questions or feedback, you can reach me at:

- GitHub: [Nada-TB](https://github.com/Nada-TB)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

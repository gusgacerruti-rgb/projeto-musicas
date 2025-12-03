# Music Bands Dashboard

A modern, interactive dashboard for music band analytics and concert management built with React and Material-UI.

## 📋 Overview

This project is a comprehensive admin dashboard focused on music band statistics, concert scheduling, and performance analytics. It provides real-time insights into band popularity, streaming data, genre distribution, and upcoming concerts.

## ✨ Features

### 📊 Dashboard
- **Band Performance Trends**: Visual representation of monthly streaming data
- **Recent Ticket Sales**: Live feed of concert ticket transactions
- **Genre Distribution**: Pie chart showing music genre breakdown
- **Band Play Count**: Line chart tracking band performance metrics
- **Global Band Popularity**: Geographic visualization of band popularity worldwide

### 🎸 Bands Management
- Top 9 bands on Spotify
- Track number of songs per band
- Clean, minimal interface showing only essential information (ID, Name, Songs)

### 🎤 Concerts
- Complete concert schedule with band information
- Concert websites and contact details
- Ticket pricing (R$ 290-550)
- Upcoming shows scheduled for 2026

### 📅 Concert Calendar
- Interactive FullCalendar integration
- Pre-loaded with 8 major concerts:
  - Bullet For My Valentine (Feb 18, 2026)
  - Sleep Token (Mar 15, 2026)
  - Korn (May 08, 2026)
  - Avenged Sevenfold (Jun 22, 2026)
  - Linkin Park (Jul 30, 2026)
  - Imagine Dragons (Sep 12, 2026)
  - Bring Me The Horizon (Oct 14, 2026)
  - My Chemical Romance (Nov 05, 2026)
- Add/delete concerts functionality

### 📈 Analytics Charts
- **Most Played Bands**: Bar chart showing song counts per band
- **Top Artists**: Line chart tracking monthly song play counts (800-1200 plays)
- **Subgenres**: Pie chart for genre analysis
- **Popularity**: Geographic heat map showing global band popularity

## 🎯 Featured Bands

1. **Sleep Token** - 75 songs
2. **Avenged Sevenfold** - 36 songs
3. **Korn** - 36 songs
4. **Imagine Dragons** - 33 songs
5. **Bullet For My Valentine** - 33 songs
6. **My Chemical Romance** - 32 songs
7. **Linkin Park** - 31 songs
8. **Bring Me The Horizon** - 26 songs

## 🛠️ Technologies Used

- **React** 18.2.0
- **Material-UI** 5.10.5
- **Nivo Charts** (Bar, Line, Pie, Choropleth)
- **FullCalendar** for event management
- **React Router** for navigation
- **MUI DataGrid** for data tables

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The application will run on `http://localhost:5001`

## 📁 Project Structure

```
src/
├── components/          # Reusable chart components
│   ├── TopArtists.jsx
│   ├── MostPlayedBands.jsx
│   ├── Subgenres.jsx
│   └── Popularity.jsx
├── scenes/
│   ├── dashboard/       # Main dashboard
│   ├── team/           # Bands management
│   ├── invoices/       # Concerts page
│   ├── calendar/       # Concert calendar
│   ├── bar/            # Bar chart page
│   ├── line/           # Line chart page
│   ├── pie/            # Pie chart page
│   └── geography/      # Geography chart page
├── data/
│   └── mockData.js     # All mock data
└── theme.js            # Theme configuration
```

## 🎨 Theme

- **Dark Mode**: Primary color #9c82c2
- **Light Mode**: Primary color #F5F5F5
- Custom Material-UI theme with purple accent colors

## 👤 Author

**gusga_lops**

## 📝 License

This project is open source and available under the MIT License.

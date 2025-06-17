# 🎬 Bioskop Web Aplikacija

Interaktivna React aplikacija za upravljanje bioskopskim repertoarom. Omogućava korisnicima da pregledaju filmove, njihove detalje i rezervišu mesta na projekcijama. Administratori mogu dodavati, ažurirati i brisati filmove i njihove projekcije.

---

## 🚀 Tehnologije

- **React** – frontend biblioteka za izradu korisničkog interfejsa
- **Vite** – alat za brzu izradu i pokretanje React aplikacija
- **React Router** – navigacija kroz više stranica
- **Context API + useReducer** – za globalno upravljanje stanjem (autentifikacija, filmovi)
- **JSON Server** – lokalna simulacija backend servera za REST API
- **Axios** – za HTTP zahteve prema JSON serveru
- **CSS** – prilagođeno stilizovanje aplikacije

---

## 🛠️ Pokretanje aplikacije

1. **Instalacija paketa:**

   ```bash
   npm install
   ```

2. **Pokretanje frontend aplikacije:**

   ```bash
   npm run dev
   ```

3. **Pokretanje JSON Server-a:**

   U drugom terminalu:

   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. Aplikacija će biti dostupna na:

   ```
   http://localhost:5173
   ```

---

## 🗂️ Struktura projekta

```
IT354-Projekat/
│
├── src/
│   ├── components/         # Komponente (MovieForm, ActorForm, itd.)
│   ├── context/            # Context-i (AuthContext, MovieContext)
│   ├── layout/             # Navigacija i layout elementi
│   ├── pages/              # Stranice (Home, Movie, CreateMovie, UpdateMovie, itd.)
│   ├── services/           # MovieService – komunikacija sa backendom
│   └── App.jsx             # Glavna aplikacija i rute
│
├── db.json                 # Simulacija baze podataka za JSON Server
├── package.json            # NPM konfiguracija
└── vite.config.js          # Vite konfiguracija
```

---

## 📦 Struktura podataka (primer jednog filma u `db.json`)

```json
{
  "id": "ba40",
  "title": "Titanic",
  "genre": "Adventure",
  "year": "1997",
  "director": "James Cameron",
  "actors": ["Leonardo DiCaprio", "Kate Winslet"],
  "poster": "titanic.jpg",
  "duration": "194",
  "average_rating": "7.9",
  "projections": [
    {
      "date_time": "2025-06-26",
      "room": "Sala 2",
      "total_seats": 100,
      "available_seats": 80,
      "ticket_price": 10
    }
  ]
}
```

---

## 👤 Autor

**Stevan Stojanović**  
Index broj: 5607  
Studijski program: Softversko inženjerstvo  
Fakultet: Elektronski fakultet, Univerzitet u Nišu

---
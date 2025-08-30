
# Online-Quizsystem

Dieses Projekt ist eine browserbasierte Quizanwendung mit einem einfachen Node.js-Backend. Es unterstützt die Speicherung und Anzeige von Quizfragen. Entwickelt im Rahmen des IU Moduls **ISEF01 – Projekt Software Engineering**.

## 🛠 Verwendete Technologien

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Datenhaltung:** JSON-Datei (`questions.json`)

## 🚀 Lokale Ausführung

### Backend starten

1. Terminal öffnen und in das Verzeichnis `backend` wechseln:
```bash
cd backend
npm install
node server.js
```
2. Der Server läuft dann auf: `http://localhost:3000`

### Frontend starten

1. Öffne die Datei `index.html` im Hauptverzeichnis im Browser.

## 📬 API-Endpunkte

- `GET /api/questions` – Gibt alle gespeicherten Fragen zurück
- `POST /api/questions` – Fügt eine neue Frage hinzu (als JSON senden)

## 🧪 Beispiel-Fragen

Die Datei `backend/questions.json` enthält zwei Beispiel-Fragen:

- Hauptstadt von Frankreich
- Farbe des Himmels

Diese kannst du im Browser anzeigen lassen oder erweitern.

## 👤 Autor

**Gvenda Hemel**  
Projektarbeit im Rahmen des Studiengangs Informatik (IU Internationale Hochschule)


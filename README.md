
# Online-Quizsystem

Dieses Projekt ist eine browserbasierte Quizanwendung mit einem einfachen Node.js-Backend. Es unterstützt die Speicherung und Anzeige von Quizfragen. Entwickelt im Rahmen des IU Moduls **ISEF01 – Projekt Software Engineering**.

## 🛠 Verwendete Technologien

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Datenhaltung:** JSON-Datei (`questions.json`)

## 🚀 Lokale Ausführung
Öffnen Sie die Projektseite auf GitHub: https://github.com/GvendaHemel/Quizsystem 
Klicken Sie auf den grünen Button Code → Download ZIP.(im Github).
Entpacken Sie das ZIP an einem beliebigen Ort auf Ihrem Rechner.

### Backend starten

Öffnen Sie ein Terminal (Windows: Eingabeaufforderung oder PowerShell, Mac/Linux: Terminal).
Wechseln Sie in das Backend-Verzeichnis:

```bash
cd backend
npm install
node server.js
```
Der Server läuft dann auf: `http://localhost:3000`

### Frontend starten

Öffnen Sie die Datei index.html im Hauptverzeichnis (Quizsystem) per Doppelklick im Browser.
Die Anwendung lädt automatisch die Fragen vom lokalen Server.

## 📬 API-Endpunkte

- `GET /api/questions` – Gibt alle gespeicherten Fragen zurück
- `POST /api/questions` – Fügt eine neue Frage hinzu (als JSON senden)

## 🧪 Beispiel-Fragen

Die Datei `backend/questions.json` enthält zwei Beispiel-Fragen:

- Hauptstadt von Frankreich
- Farbe des Himmels

Diese kannst du im Browser anzeigen lassen oder erweitern.

## 👤 Autor

**Gvenda Hemel**  (Gvantsa Gogrichiani) 
Projektarbeit im Rahmen des Studiengangs Informatik (IU Internationale Hochschule)


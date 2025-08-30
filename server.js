const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Statische Dateien aus dem Hauptverzeichnis (z. B. index.html) bereitstellen:
app.use(express.static(__dirname));

const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'questions.json');

app.use(cors());
app.use(bodyParser.json());

// Alle Fragen abrufen
app.get('/api/questions', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Fehler beim Lesen der Datei.' });
        }
        res.json(JSON.parse(data));
    });
});

// Neue Frage speichern
app.post('/api/questions', (req, res) => {
    const newQuestion = req.body;
    console.log("Neue Frage empfangen:", newQuestion);

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error("Fehler beim Lesen der Datei:", err);
            return res.status(500).json({ error: 'Fehler beim Lesen der Datei.' });
        }

        let questions = [];
        try {
            questions = JSON.parse(data);
        } catch (parseErr) {
            console.error("Fehler beim Parsen von JSON:", parseErr);
            return res.status(500).json({ error: 'Ungültiges JSON in Datei.' });
        }

        questions.push(newQuestion);

        fs.writeFile(DATA_FILE, JSON.stringify(questions, null, 2), err => {
            if (err) {
                console.error("Fehler beim Schreiben der Datei:", err);
                return res.status(500).json({ error: 'Fehler beim Schreiben der Datei.' });
            }

            console.log("Frage erfolgreich gespeichert.");
            res.status(201).json({ message: 'Frage gespeichert.' });
        });
    });
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

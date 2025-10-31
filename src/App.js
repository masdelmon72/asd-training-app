// App.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@mui/material";

import ReactPlayer from "react-player";
import { PlayCircle, PauseCircle } from "@mui/icons-material";

const mockStudents = [
  {
    id: 1,
    name: "Swan",
    surname: "Giorgini",
    email: "swan.giorgini@email.com",
    trainingPlans: [
      {
        id: 1,
        name: "Piano Base",
        exercises: [
          {
            id: 1,
            name: "stretching",
            description: "Esercizio base per le gambe",
            level: 2,
            videoUrl:
              "https://play.min.io:9443/api/v1/download-shared-object/aHR0cHM6Ly8xMjcuMC4wLjE6OTAwMC9tYXNkZWxtb24vYXZhbnphdG8ubXA0P1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9M0I0SDlMN0pBTUs3OUJLUjhaSkElMkYyMDI1MDEzMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAxMzBUMTMzMDEyWiZYLUFtei1FeHBpcmVzPTQzMTk5JlgtQW16LVNlY3VyaXR5LVRva2VuPWV5SmhiR2NpT2lKSVV6VXhNaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoWTJObGMzTkxaWGtpT2lJelFqUklPVXczU2tGTlN6YzVRa3RTT0ZwS1FTSXNJbVY0Y0NJNk1UY3pPREk0TmprME5Dd2ljR0Z5Wlc1MElqb2liV2x1YVc5aFpHMXBiaUo5Lm9obktaZlR1aVdjdVRsUlIxZlBHUnhuTmVIS1JSa0wwRnlIYkdzb1o5YUJoZjhlUkdDX05xZFFWMS1oc0M1ZURzbm9GMzVLb1p0UDI0bkQtdm1faU13JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9MWE5ZTdiZGZlZGFjNjY2YTdiYTJlYWMwNjE3MDBhNTEwZGQ5YjhlNGMwYzRjNWNkMWY2NGE1MWJmZTNiNTIxNQ",
          },
          {
            id: 2,
            name: "dribbling",
            description: "Palleggio",
            level: 1,
            videoUrl:
              "https://play.min.io:9443/api/v1/download-shared-object/aHR0cHM6Ly8xMjcuMC4wLjE6OTAwMC9tYXNkZWxtb24vYXZhbnphdG8ubXA0P1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9UVJGMDlCTEJRTFE3RlNTSTJJN1YlMkYyMDI1MDEyOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAxMjhUMTExMzA2WiZYLUFtei1FeHBpcmVzPTQzMTk1JlgtQW16LVNlY3VyaXR5LVRva2VuPWV5SmhiR2NpT2lKSVV6VXhNaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoWTJObGMzTkxaWGtpT2lKUlVrWXdPVUpNUWxGTVVUZEdVMU5KTWtrM1ZpSXNJbVY0Y0NJNk1UY3pPREV3TlRreE5Td2ljR0Z5Wlc1MElqb2liV2x1YVc5aFpHMXBiaUo5LjRPeVVBcndPU1NLR2RiSDVuUHBSUFM3N19wUVpfR2VNd0xRRjJHUVN5VEoyazJaakxNRWlmaTB1bnhKTFNQOFlJdDZ1X1FWV3c1T25ocVJtNEp0NWdnJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9MzY1NDNhY2JiZWZiM2I2ZGM4ZGFiNTZlYWExNjMwYzYyYWQzYjM1MjgzMTU1MGU2OTIwY2ZmZWZjYjg3ZTcxMw",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Michele",
    surname: "Della Ventura",
    email: "michele.dellaventura@email.com",
    trainingPlans: [
      {
        id: 2,
        name: "Piano Avanzato",
        exercises: [
          {
            id: 3,
            name: "Deadlift",
            description: "Esercizio avanzato per schiena e gambe",
            level: 3,
            videoUrl:
              "https://drive.google.com/file/d/1fk6l-qHF6J4Ern6VpV5FJaPwSP6F6Mdo",
          },
        ],
      },
    ],
  },
];

const StudentCard = ({ student, onSelect }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h3" gutterBottom>
        {student.name} {student.surname}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        {student.email}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSelect(student)}
      >
        Piani di Allenamento
      </Button>
    </CardActions>
  </Card>
);

const PlanCard = ({ plan, onSelect }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h3" gutterBottom>
        {plan.name}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        Numero esercizi: {plan.exercises.length}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSelect(plan)}
      >
        Visualizza Esercizi
      </Button>
    </CardActions>
  </Card>
);

/*

const ExerciseCard = ({ exercise }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h3" gutterBottom>
        {exercise.name}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        {exercise.description}
      </Typography>
      <div
        style={{
          padding: "8px",
          borderRadius: "4px",
          marginTop: "8px",
          backgroundColor:
            exercise.level === 0
              ? "#ffebee"
              : exercise.level === 1
              ? "#fff3e0"
              : exercise.level === 2
              ? "#e3f2fd"
              : exercise.level === 3
              ? "#e8f5e9"
              : "#f3e5f5",
        }}
      >
        <Typography>
          Livello:{" "}
          {
            ["Insufficiente", "Base", "Intermedio", "Avanzato", "Elite"][
              exercise.level
            ]
          }
        </Typography>
      </div>
    </CardContent>
  </Card>
);

*/

const ExerciseCard = ({ exercise }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleVideo = () => {
    setShowVideo(!showVideo);
    setIsPlaying(!showVideo); // Avvia il video quando viene mostrato
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h3" gutterBottom>
          {exercise.name}
        </Typography>

        <Typography color="textSecondary" gutterBottom>
          {exercise.description}
        </Typography>

        {exercise.videoUrl && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "16px",
                marginBottom: "8px",
              }}
            >
              <IconButton
                color="primary"
                onClick={handleToggleVideo}
                size="small"
              >
                {showVideo ? <PauseCircle /> : <PlayCircle />}
              </IconButton>
              <Typography color="primary">
                {showVideo ? "Nascondi video" : "Mostra video tutorial"}
              </Typography>
            </div>

            <Collapse in={showVideo}>
              <div
                style={{
                  position: "relative",
                  paddingTop: "56.25%", // 16:9 Aspect Ratio
                  marginBottom: "16px",
                }}
              >
                <ReactPlayer
                  url={exercise.videoUrl}
                  width="100%"
                  height="100%"
                  playing={isPlaying}
                  controls={true}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  config={{
                    youtube: {
                      playerVars: {
                        modestbranding: 1,
                        rel: 0,
                      },
                    },
                  }}
                />
              </div>
            </Collapse>
          </>
        )}

        <div
          style={{
            padding: "8px",
            borderRadius: "4px",
            marginTop: "8px",
            backgroundColor:
              exercise.level === 0
                ? "#ffebee"
                : exercise.level === 1
                ? "#fff3e0"
                : exercise.level === 2
                ? "#e3f2fd"
                : exercise.level === 3
                ? "#e8f5e9"
                : "#f3e5f5",
          }}
        >
          <Typography>
            Livello:{" "}
            {
              ["Insufficiente", "Base", "Intermedio", "Avanzato", "Elite"][
                exercise.level
              ]
            }
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default function App() {
  const [view, setView] = useState("students");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleBack = () => {
    if (view === "exercises") {
      setView("plans");
      setSelectedPlan(null);
    } else if (view === "plans") {
      setView("students");
      setSelectedStudent(null);
    }
  };

  const handleReset = () => {
    setView("students");
    setSelectedStudent(null);
    setSelectedPlan(null);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <div
        style={{
          backgroundColor: "#1976d2",
          color: "white",
          padding: "16px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Typography
            variant="h6"
            component="span"
            style={{ fontWeight: "bold" }}
          >
            Training App
          </Typography>
          <Button color="inherit" onClick={handleReset}>
            Allievi
          </Button>
        </div>
      </div>

      <main style={{ padding: "24px" }}>
        {view !== "students" && (
          <Button
            onClick={handleBack}
            color="primary"
            style={{ marginBottom: "16px" }}
            startIcon={<span>←</span>}
          >
            Indietro
          </Button>
        )}

        {view === "students" && (
          <>
            <Typography variant="h4" component="h2" gutterBottom>
              Lista Allievi
            </Typography>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "16px",
              }}
            >
              {mockStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onSelect={(student) => {
                    setSelectedStudent(student);
                    setView("plans");
                  }}
                />
              ))}
            </div>
          </>
        )}

        {view === "plans" && selectedStudent && (
          <>
            <Typography variant="h4" component="h2" gutterBottom>
              Piani di Allenamento - {selectedStudent.name}{" "}
              {selectedStudent.surname}
            </Typography>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "16px",
              }}
            >
              {selectedStudent.trainingPlans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  onSelect={(plan) => {
                    setSelectedPlan(plan);
                    setView("exercises");
                  }}
                />
              ))}
            </div>
          </>
        )}

        {view === "exercises" && selectedPlan && (
          <>
            <Typography variant="h4" component="h2" gutterBottom>
              Esercizi - {selectedPlan.name}
            </Typography>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "16px",
              }}
            >
              {selectedPlan.exercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

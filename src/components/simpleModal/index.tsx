import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { EnseignantsType } from "../../types/entities/enseignants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type BasicModalPropsType<T> = {
  info: T;
};

const BasicModal: React.FC<BasicModalPropsType<EnseignantsType>> = ({
  info,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="bg-blue-600 rounded-2xl text-white font-bold p-3 shadow-sm" onClick={handleOpen}>
        Voir Fiche
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <img
            src={info?.photo || "/images/user.png"}
            alt={info?.nom}
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: 16,
            }}
          />
          <Typography variant="h5" fontWeight="bold">
            {info?.nom}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {info?.grade}
          </Typography>
          <Box mt={2}>
            <Typography variant="body1">
              <strong>Université:</strong> {info?.universite}
            </Typography>
            <Typography variant="body1">
              <strong>Faculté:</strong> {info?.faculte}
            </Typography>
            <Typography variant="body1">
              <strong>Département:</strong> {info?.departement}
            </Typography>
            <Typography variant="body1">
              <strong>Pays:</strong> {info?.pays}
            </Typography>
          </Box>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="secondary"
            sx={{ mt: 3 }}
          >
            Fermer
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;

// const TeacherFicheModal = ({ info }) => {

// };

// export default TeacherFicheModal;

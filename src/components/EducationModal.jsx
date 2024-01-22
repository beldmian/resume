import { Typography } from "@mui/joy"
import CenteredModal from "./CenteredModal"

export default function EducationModal({open, onClose, name, type, profile, startDate, endDate, description}) {
    return (
        <CenteredModal
            open={open}
            onClose={onClose}
        >
            <Typography level="title-md">{name}</Typography>
            <Typography level="body-md"><strong>Тип образования:</strong> {type}</Typography>
            <Typography level="body-md"><strong>Профиль/Специальность:</strong> {profile}</Typography>
            <Typography level="body-md"><strong>Срок обучения:</strong> {startDate} - {endDate}</Typography>
            <Typography level="body-md">{description}</Typography>
        </CenteredModal>
    )
}
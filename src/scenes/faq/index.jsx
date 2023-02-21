import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: colors.greenAccent[500] }} variant='h5'>
            What is the purpose of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This website is a demo for the ReactJS framework.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: colors.greenAccent[500] }} variant='h5'>
            Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is a random answer.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: colors.greenAccent[500] }} variant='h5'>
            Another relevant question.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Some relevant answer.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: colors.greenAccent[500] }} variant='h5'>
            What is the purpose of life?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>To live.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: colors.greenAccent[500] }} variant='h5'>
            Final question.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Final answer.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;

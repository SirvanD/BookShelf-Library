import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { UserContext } from "../UserContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal(props) {
  const [open, setOpen] = React.useState(false);
  const [donateTitle, setDonateTitle] = useState("");
  const [donateAuthor, setDonateAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [rating, setRating] = useState("");
  const [publishedDate, setPublishDate] = useState("");
  const [maturityRating, setMaturityRating] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("available");
  const [bookCover, setBookCover] = useState("");
  const { bookStore, setBookStore } = React.useContext(UserContext);

  const handleOpen = async (e) => {
    // https://www.googleapis.com/books/v1/volumes?q=intitle:flowers+inauthor:keyes&key=AIzaSyDmkfSjnnPP6Zl7m0MkrTDQZEjOP0g8y4A&maxResults=1
    e.preventDefault();

    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${props.bookTitle}+inauthor:${props.bookAuthor}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=1`
      )
      .then((data) => {
        setDonateTitle(data.data.items[0]?.volumeInfo.title);
        setDonateAuthor(data.data.items[0]?.volumeInfo.authors);
        setCategory(data.data.items[0]?.volumeInfo.categories);
        setSubtitle(data.data.items[0]?.volumeInfo.subtitle);
        setRating(data.data.items[0]?.volumeInfo.averageRating);
        setPublishDate(data.data.items[0]?.volumeInfo.publishedDate);
        setMaturityRating(data.data.items[0]?.volumeInfo.maturityRating);
        setDescription(data.data.items[0]?.volumeInfo.description);
        // setAvailability(data.data.items[0]?.volumeInfo.title);
        setBookCover(data.data.items[0]?.volumeInfo.imageLinks.thumbnail);
        // setResult(data.data.items);
      });
    // console.log(props.bookTitle);
    // console.log(props.bookAuthor);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDonate = async (e) => {
    e.preventDefault();

    const newBook = {
      volumeInfo: {
        title: donateTitle,
        authors: [donateAuthor],
        categories: [category],
        subtitle: subtitle,
        averageRating: rating,
        publishedDate: publishedDate,
        maturityRating: maturityRating,
        description: description,
        availability: availability,
        imageLinks: {
          thumbnail: bookCover,
        },
      },
    };
    await axios.post("./books/donate", newBook).then(() => {
      setBookStore([newBook, ...bookStore]);
      handleClose();
    });
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        endIcon={<ManageSearchIcon />}
        style={{
          background: "#ffa722",
          color: "white",
          marginTop: 5,
          fontSize: 13,
          width: 120,
          height: 50,
          marginLeft: 380,
        }}
      >
        LookUp
      </Button>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 500, height: 720 }}>
          <h2 id="child-modal-title">Your Book Details</h2>
          <p id="child-modal-description">
            If this is correctly showing your book details then click Donate,
            thank you!
          </p>

          <FormControl
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr" },
              gap: 2,
              mt: 4,
            }}
          >
            <Box position="absolute" top="-5%" left="60%">
              <Container>
                <CardMedia
                  component="img"
                  alt="Book Card"
                  sx={{ width: 150 }}
                  image={bookCover}
                />
              </Container>
            </Box>
            <TextField
              sx={{ marginTop: 30 }}
              id="outlined-read-only-input"
              label="Title"
              defaultValue={donateTitle}
              size="small"
            />
            <TextField
              sx={{ marginTop: 30 }}
              id="outlined-read-only-input"
              label="Author"
              defaultValue={donateAuthor}
              size="small"
            />

            <TextField
              id="outlined-read-only-input"
              label="Category"
              defaultValue={category}
              size="small"
            />
            <TextField
              id="outlined-read-only-input"
              label="Subtitle"
              defaultValue={subtitle}
              size="small"
            />
            <TextField
              id="outlined-read-only-input"
              label="Average Rating"
              defaultValue={rating}
              size="small"
            />
            <TextField
              id="outlined-read-only-input"
              label="Published Date"
              defaultValue={publishedDate}
              size="small"
            />

            <TextField
              id="outlined-read-only-input"
              label="Maturity Rating"
              defaultValue={maturityRating}
              size="small"
            />

            <TextField
              id="outlined-read-only-input"
              label="availability"
              defaultValue={availability}
              size="small"
            />

            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              maxRows={4}
              value={description}
              size="small"
              // onChange={handleChange}
            />
          </FormControl>

          <Button
            onClick={handleDonate}
            variant="contained"
            endIcon={<BookmarkAddIcon />}
            style={{
              background: "#ffa722",
              color: "white",
              marginTop: -100,
              marginLeft: 275,
            }}
          >
            Donate
          </Button>

          <Button
            onClick={handleClose}
            endIcon={<CancelIcon />}
            style={{
              background: "#ffa722",
              color: "white",
              marginTop: -100,
              marginLeft: 10,
              // fontSize: 13,
              // width: 200,
              // height: 50,
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function DonateBookModal() {
  const [open, setOpen] = React.useState(false);
  const [bookTitle, setBookTitle] = React.useState("");
  const [bookAuthor, setBookAuthor] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        endIcon={<BookmarkAddIcon />}
        style={{
          background: "#ffa722",
          color: "white",
          margin: 8,
          fontSize: 9,
        }}
      >
        Donate
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            ...style,
            width: 500,
            height: 500,
            display: "grid",
            gridTemplateColumns: { sm: "1fr" },
            gap: 1,
            mt: 1,
          }}
        >
          <h2 id="parent-modal-title">Donate a Book</h2>
          <p id="parent-modal-description">
            We help with looking up your books details from Google Books
            database. Simply type in the title and author below and click
            Lookup!
          </p>

          <TextField
            required
            onChange={(e) => setBookTitle(e.target.value)}
            id="outlined-read-only-input"
            label="Title"
            defaultValue=""
          />
          <TextField
            required
            onChange={(e) => setBookAuthor(e.target.value)}
            id="outlined-read-only-input"
            label="Author"
            defaultValue=""
          />

          <ChildModal bookTitle={bookTitle} bookAuthor={bookAuthor} />
        </Box>
      </Modal>
    </div>
  );
}

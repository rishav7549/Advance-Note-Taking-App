// import React, { useState, useEffect } from "react";
// import { Frown } from "react-feather";
// import TodoBody from "../TodoBody";
// import "./Home.css";
// const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setData(JSON.parse(localStorage.getItem("myNotes")) || []);
//   }, []);
//   const refresher = () => {
//     setData(JSON.parse(localStorage.getItem("myNotes")) || []);
//   };

//   return (
//     <>
//       <div className="row justify-content-between mx-0 p-5">
//         {!data.length ? (
//           <h1 className="text-center display-1 fw-light text-seconday my-5">
//             <Frown size={100} /> No Notes. Create new one.
//           </h1>
//         ) : (
//           data.map((item, i) => (
//             <TodoBody key={item.id} item={item} refresher={refresher} />
//           ))
//         )}
//       </div>
//     </>
//   );
// };
// export default Home;

import React, { useState, useEffect } from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ModalDiv from "../modal/modal";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal1 from "../modal/modal1";
import Modal2 from "../modal/modal2";
import Typography from "@mui/material/Typography";
// import TextField from "@material-ui/core/TextField";
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

export default function () {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [editModal1, setEditModal1] = useState(false);
  const [editModal2, setEditModal2] = useState(false);
  const [item, setItem] = useState([]);
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [name, setName] = useState("Click here to Edit");
  const [isNameFocused, setIsNamedFocused] = useState(false);
  const [name1, setName1] = useState("Click here to Edit");
  const [isNameFocused1, setIsNamedFocused1] = useState(false);
  const [name2, setName2] = useState("Click here to Edit");
  const [isNameFocused2, setIsNamedFocused2] = useState(false);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("myNotes")) || []);
    setData1(JSON.parse(localStorage.getItem("myNotes1")) || []);
    setData2(JSON.parse(localStorage.getItem("myNotes2")) || []);
  }, []);

  const refresher = () => {
    setData(JSON.parse(localStorage.getItem("myNotes")) || []);
    setData1(JSON.parse(localStorage.getItem("myNotes1")) || []);
    setData2(JSON.parse(localStorage.getItem("myNotes2")) || []);
  };

  const handleDelete = (id) => {
    const pass = window.confirm("Are you sure you want to delete this note ?");
    if (!pass) {
      return;
    }
    if (data.length) {
      let newData = data.filter((item) => id !== item.id);
      localStorage.setItem("myNotes", JSON.stringify(newData));
      refresher();
    }
  };

  const handleDelete1 = (id) => {
    const pass = window.confirm("Are you sure you want to delete this note ?");
    if (!pass) {
      return;
    }
    if (data1.length) {
      let newData1 = data1.filter((item) => id !== item.id);
      localStorage.setItem("myNotes1", JSON.stringify(newData1));
      refresher();
    }
  };
  const handleDelete2 = (id) => {
    const pass = window.confirm("Are you sure you want to delete this note ?");
    if (!pass) {
      return;
    }
    if (data2.length) {
      let newData = data2.filter((item) => id !== item.id);
      localStorage.setItem("myNotes2", JSON.stringify(newData));

      // window.location.reload()
      refresher();
    }
  };

  const handleEdit = (item) => {
    setItem(item);
    setEditModal(true);
  };

  const handleEdit1 = (item) => {
    setItem1(item);
    setEditModal1(true);
  };

  const handleEdit2 = (item) => {
    setItem2(item);
    setEditModal2(true);
  };

  const SingleTask = (props) => {
    return (
      <>
        <div className="card">
          <div className="card_title">
            <span className="card_todo_title">
              <AssignmentIndIcon />
              <span>{props.item.title}</span>
            </span>
            <span>
              <EditIcon
                fontSize="small"
                onClick={() => handleEdit(props.item)}
              />
            </span>
          </div>
          <div className="delete">
            <Tooltip title={props.item.content}>
              <p sx={{ m: 1 }}>{props.item.content.slice(0, 15) + "..."}</p>
            </Tooltip>
            <DeleteIcon
              fontSize="small"
              onClick={() => handleDelete(props.item.id)}
            />
          </div>
        </div>
      </>
    );
  };

  const SingleTask1 = (props) => {
    return (
      <>
        <div className="card">
          <div className="card_title">
            <span className="card_todo_title">
              <AssignmentIndIcon />
              <span>{props.item.title}</span>
            </span>
            <span>
              <EditIcon
                fontSize="small"
                onClick={() => handleEdit1(props.item)}
              />
            </span>
          </div>
          <div className="delete">
            <Tooltip title={props.item.content}>
              <p sx={{ m: 1 }}>{props.item.content.slice(0, 15) + "..."}</p>
            </Tooltip>
            <DeleteIcon
              fontSize="small"
              onClick={() => handleDelete1(props.item.id)}
            />
          </div>
        </div>
      </>
    );
  };
  const SingleTask2 = (props) => {
    return (
      <>
        <div className="card">
          <div className="card_title">
            <span className="card_todo_title">
              <AssignmentIndIcon />
              <span>{props.item.title}</span>
            </span>
            <span>
              <EditIcon
                fontSize="small"
                onClick={() => handleEdit2(props.item)}
              />
            </span>
          </div>
          <div className="delete">
            <Tooltip title={props.item.content}>
              <p sx={{ m: 1 }}>{props.item.content.slice(0, 15) + "..."}</p>
            </Tooltip>
            <DeleteIcon
              fontSize="small"
              onClick={() => handleDelete2(props.item.id)}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div>
        {/* <TextField
          id="outlined-basic"
          label="Task Title"
          variant="outlined"
          size="small"
        /> */}
        {!isNameFocused ? (
          <Typography
            variant="h5"
            width={222.67}
            // className={classes.name}
            onClick={() => {
              setIsNamedFocused(true);
            }}
          >
            {name}
          </Typography>
        ) : (
          <TextField
            autoFocus
            id="outlined-basic"
            label="Task Title"
            variant="outlined"
            size="small"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={(event) => setIsNamedFocused(false)}
          />
          // <TextField
          //   autoFocus
          //   inputProps={{ className: classes.name }}
          //   value={name}
          //   onChange={(event) => setName(event.target.value)}
          //   onBlur={(event) => setIsNamedFocused(false)}
          // />
        )}
        <div className="card">
          <div className="card_title">
            <span className="card_todo_title">
              <AssignmentIndIcon />
              <span>Add Todo</span>
            </span>
            <span>
              <AddCircleIcon onClick={() => setShowModal(true)} />
            </span>
          </div>
          <div>
            <p>Add Todo Description</p>
          </div>
        </div>
        {data.map((item, i) => (
          <SingleTask key={item.id} item={item} refresher={refresher} />
        ))}
      </div>
      <div>
        {/* <TextField
          id="outlined-basic"
          label="Task Title"
          variant="outlined"
          size="small"
        /> */}
        {!isNameFocused1 ? (
          <Typography
            variant="h5"
            width={222.67}
            // className={classes.name}
            onClick={() => {
              setIsNamedFocused1(true);
            }}
          >
            {name1}
          </Typography>
        ) : (
          <TextField
            autoFocus
            id="outlined-basic"
            label="Task Title"
            variant="outlined"
            size="small"
            value={name1}
            onChange={(event) => setName1(event.target.value)}
            onBlur={(event) => setIsNamedFocused1(false)}
          />
        )}
        <div className="card">
          <div className="card_title">
            <span className="card_todo_title">
              <AssignmentIndIcon />
              <span>Add Todo</span>
            </span>
            <span>
              <AddCircleIcon onClick={() => setShowModal1(true)} />
            </span>
          </div>
          <div>
            <p>Add Todo Description</p>
          </div>
        </div>
        {data1.map((item) => (
          <SingleTask1 key={item.id} item={item} refresher={refresher} />
        ))}
      </div>
      <div>
        {/* <TextField
          id="outlined-basic"
          label="Task Title"
          variant="outlined"
          size="small"
        /> */}
        {!isNameFocused2 ? (
          <Typography
            variant="h5"
            width={222.67}
            // className={classes.name}
            onClick={() => {
              setIsNamedFocused2(true);
            }}
          >
            {name2}
          </Typography>
        ) : (
          <TextField
            autoFocus
            id="outlined-basic"
            label="Task Title"
            variant="outlined"
            size="small"
            value={name2}
            onChange={(event) => setName2(event.target.value)}
            onBlur={(event) => setIsNamedFocused2(false)}
          />
        )}
        <div className="card">
          <div className="card_title">
            <span className="card_todo_title">
              <AssignmentIndIcon />
              <span>Add Todo</span>
            </span>
            <span>
              <AddCircleIcon onClick={() => setShowModal2(true)} />
            </span>
          </div>
          <div>
            <p>Add Todo Description</p>
          </div>
        </div>
        {data2.map((item) => (
          <SingleTask2 key={item.id} item={item} refresher={refresher} />
        ))}
      </div>
      {showModal && (
        <ModalDiv
          text={"Add"}
          showModal={showModal}
          setShowModal={setShowModal}
          refresher={refresher}
          item={[]}
        />
      )}

      {showModal1 && (
        <Modal1
          text={"Add"}
          showModal={showModal1}
          setShowModal={setShowModal1}
          refresher={refresher}
          item={[]}
        />
      )}
      {showModal2 && (
        <Modal2
          text={"Add"}
          showModal={showModal2}
          setShowModal={setShowModal2}
          refresher={refresher}
          item={[]}
        />
      )}

      {/* This is for edit modal */}
      {editModal && (
        <ModalDiv
          text={"Edit"}
          showModal={editModal}
          setShowModal={setEditModal}
          refresher={refresher}
          item={item}
        />
      )}
      {editModal1 && (
        <Modal1
          text={"Edit"}
          showModal={editModal1}
          setShowModal={setEditModal1}
          refresher={refresher}
          item={item1}
        />
      )}
      {editModal2 && (
        <Modal2
          text={"Edit"}
          showModal={editModal2}
          setShowModal={setEditModal2}
          refresher={refresher}
          item={item2}
        />
      )}
    </div>
  );
}

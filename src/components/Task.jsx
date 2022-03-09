import TaskDaysToGo from "./TaskDaysToGo";
import TaskReps from "./TaskReps";
import DeleteTaskButton from "./DeleteTaskButton";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./Task.css";

const Task = ({ task, onDone, onDelete }) => {
  return (
    <Card className="task-card" key={task._id} className="task-card">
      <Card.Header className="task-details">
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <TaskReps className="col-3" task={task} onDone={onDone} />
          </Nav.Item>
          <Nav.Item>
            <TaskDaysToGo task={task} />
          </Nav.Item>
          <Nav.Item>
            <DeleteTaskButton task={task} onDelete={onDelete} />
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Text>{task.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Task;

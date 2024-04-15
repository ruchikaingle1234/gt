import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <div className="frame-parent5">
      <div className="h2-parent6">
        <b className="h211">Get instant access</b>
        <div className="body15">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </div>
      </div>
      <div className="form1">
        <Form className="form2">
          <Form.Control type="text" placeholder="name@gmail.com" />
        </Form>
        <Button variant="light">Get access</Button>
      </div>
    </div>
  );
};

export default FrameComponent4;

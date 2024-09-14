import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import MessageContainer from "../ui/MessageContainer";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
      </Row>
      <Row>
        <h2>No content to show</h2>
        <Modal>
          <Modal.Open opens={"under-construction"}>
            <Button>Site under construction, press me to know more</Button>
          </Modal.Open>
          <Modal.Window name={"under-construction"}>
            <MessageContainer />
          </Modal.Window>
        </Modal>
      </Row>
    </>
  );
}

export default Dashboard;

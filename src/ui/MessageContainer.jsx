/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const StyledMessageContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const H1 = styled.h1`
  font-size: 3%.2;
`;

const A = styled.a`
  color: blue;
  font-weight: 600;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style: disc;
  padding: 1.2rem 2.4rem;
  gap: 0.4rem;
  margin-bottom: 1.4rem;
`;

const LI = styled.li`
  text-align: start;
`;

const Form = styled.form`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  width: 60%;
  margin: 2.4rem auto;
`;

const FormDIV = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 600;
`;

function MessageContainer() {
  return (
    <StyledMessageContainer>
      <H1>This Site is Under Construction</H1>
      <div>
        <p>
          Hey user 👋, hope your are doing well this application is{" "}
          <strong>🚧 under construction 🚧</strong> and not all features are
          working as expected 🥲. But don't worry Be connected with developer{" "}
          <A href="https://www.linkedin.com/in/gitanshu-sankhla/" target="new">
            Gitanshu sankhla
          </A>{" "}
          to keep updated about the Wild Oasis project.
        </p>
      </div>
      <div>
        <h3>Upcoming Features</h3>
        <UL>
          <LI>
            <strong>Authentication</strong> for users to perform CRUD on data
          </LI>
          <LI>
            A proper <strong>Dashboard</strong> to analyse data through charts
            and bars.
          </LI>
          <LI>
            A <strong>Users</strong> page to create new users or update existing
            users and assign them cabins.
          </LI>
          <LI>
            A <strong>Dark Mode</strong> mode for the application.
          </LI>
          <LI>
            A <strong>Header</strong> with current login data and user setting
            link
          </LI>
        </UL>
        <h2>
          Excited to explore full application, then do subscribe from below form
        </h2>
        <Form name="subscribe" action="POST" data-netlify="true" netlify>
          <FormDIV>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </FormDIV>
          <Button>Subscribe</Button>
        </Form>
      </div>
    </StyledMessageContainer>
  );
}

export default MessageContainer;

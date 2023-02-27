
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 
import { Nav, Stack, ThemeProvider } from 'react-bootstrap'
import Todo from "./components/Todo";


class App extends React.Component {
  render() {
    return <>
       <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
<Nav
      activeKey="/"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/">Class component TODO APP</Nav.Link>
      </Nav.Item>
    </Nav>

<Stack gap={2} className="col-md-5 mx-auto">
<Todo/>
    </Stack>

</ThemeProvider>
    
    </>
  }
}
 
export default App;
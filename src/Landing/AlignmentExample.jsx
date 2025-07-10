import Nav from 'react-bootstrap/Nav';
import Marquee from "react-fast-marquee";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from '@mui/material/Badge';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvgIcon from '@mui/material/SvgIcon';

function AlignmentExample() {
  return (
    <div>
        <div class='aab'>
       <Marquee >
 <h4>Welcome to Rutvik Patil Portfolio !</h4> 
</Marquee>
</div>
       

      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item class='link1'>
          <Nav.Link href="/home" >HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item class='link1'>
          <Nav.Link eventKey="link-1" >SKILLS</Nav.Link>
        </Nav.Item>
        <Nav.Item class='link1'>
          <Nav.Link eventKey="link-2" >PROJECT</Nav.Link>
        </Nav.Item>
        <Nav.Item class='link1'>
          <Nav.Link eventKey="link-3">ABOUT</Nav.Link>
        </Nav.Item>
      </Nav>


      <Container >
      <Row >
        <Col >
        <h1>Hi all, I'm Rutvik</h1>
        <p>My name is Rutvik Patil. I possess a solid foundation in web development and programming with technical skills in Java, HTML, CSS,
JavaScript, and React.I bring strong soft skills to the table — I am a hardworking, quick learner, and highly adaptable.</p>
 <Nav>
 <Nav.Item style={{margin:'-5px'}} class='link2'>
 <Nav.Link>
 <Badge color="secondary">
 <GitHubIcon color="action" />
 </Badge>
 </Nav.Link>
 </Nav.Item>

<Nav.Item style={{margin:'-5px'}} class='link2'>
<Nav.Link>
<Badge  color="primary">
  <MailIcon color="action" />
</Badge>
</Nav.Link>
</Nav.Item>

<Nav.Item style={{margin:'-5px'}} class='link2'>
<Nav.Link>
<Badge  color="primary">
  <InstagramIcon  color="action" />
</Badge>
</Nav.Link>
</Nav.Item>

<Nav.Item style={{margin:'-5px'}} class='link2'>
    <Nav.Link>
        <SvgIcon>
  <svg width="1000px" height="1000px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/></svg>

</SvgIcon>
    </Nav.Link>
</Nav.Item>


</Nav>




        </Col>
      
        <Col >
          <Container>
            
      <Row>
        <Col lg={8} sm={12}>
          <Image src="https://cdni.iconscout.com/illustration/premium/preview/man-working-on-ui-ux-design-illustration-download-in-svg-png-gif-file-formats--creative-designer-designing-pack-development-illustrations-7963304.png?f=webp&h=700" thumbnail />
        </Col>
      </Row>
    </Container>
        </Col>
      </Row>
    </Container>
     
    </div>
  );
}

export default AlignmentExample;
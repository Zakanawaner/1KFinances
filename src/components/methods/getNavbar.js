//Router
import { Link } from 'react-router-dom';


function NavLink(props) {
  return (
    <Link className={props.cls} to={props.link}>
      {props.name}
    </Link>
  );
}

export default function GetNavBar(props) {
  const items = [];
  if (props.items !== undefined) {
    items.push(
      <NavLink
        name="1K-Finances"
        link="/"
        cls="mainimage"
        key="MainImage"
      />
    );
    for (var i=0; i < props.items.length; i++) {
      items.push(
        <NavLink
          name={props.items[i].name}
          link={props.items[i].link}
          key={i}
        />
      );
    }
  }
  return (
    <div className="topnav mb-10">
      {items}
    </div>
  );
}

import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title={"our story"} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              placeat magni magnam. Tenetur harum impedit sed magnam fugiat in,
              ab magni quae nisi autem nostrum ratione veniam, eveniet maxime
              cum cupiditate, natus voluptatibus eos nam consequuntur ipsam
              blanditiis voluptate hic explicabo? Vero, assumenda! In, dicta.
              Animi voluptatum consectetur in quibusdam!
            </p>
            <Link to="/about" className="btn text-uppercase btn-yellow">
              about page
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

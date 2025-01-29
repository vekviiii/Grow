import { useState } from "react";
import { Card, CardNobrdr } from "../../utils/card component";
import { TrashIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";

const Details = () => {
  let [IsChecked, setIsChecked] = useState(false);

  return (
    <>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>

      {/* Divider */}
      <div className="mt-5 pt-5"></div>

      <h1>Title</h1>
      <h2>Ullamco aliquip adipisicing deserunt</h2>
      <p>
        Sit ullamco sunt Lorem aute sint sint veniam esse cupidatat labore
        veniam enim reprehenderit culpa. Sunt commodo Lorem qui cupidatat
        eiusmod Lorem sit et veniam. Tempor ad laborum quis quis cupidatat
        consectetur occaecat. Duis enim commodo enim cupidatat ad aliqua
        cupidatat sint deserunt sunt fugiat aliqua velit.
      </p>

      {/* Divider */}
      <div className="mt-5 pt-5"></div>

      <div className="siblings">
        <button><GlobeAltIcon className="size-5"/></button>
        <button className="btn-delete mx-2"><TrashIcon className="size-5" /></button>

        <label className="relative">
          <input type="text" placeholder="enter name" id="name" />
          <UserIcon className="size-5 Input-Icon lighter-color-Icon"/>
        </label>

        <label className="toggle mx-2">
          <input
            type="checkbox"
            id="checker"
            checked={IsChecked}
            onChange={() => setIsChecked(!IsChecked)} // Update the state when toggled
          />
          <span className="slider"></span>
        </label>
      </div>

      {/* Divider */}
      <div className="mt-5 pt-5"></div>

      <Card>
        <h2>Title for card</h2>
        <p>
          Culpa proident minim culpa pariatur sunt adipisicing sint non
          excepteur esse sunt consequat ad est.
        </p>
      </Card>
      <CardNobrdr>
        <h2>Title for card</h2>
        <p>
          Culpa proident minim culpa pariatur sunt adipisicing sint non
          excepteur esse sunt consequat ad est.
        </p>
      </CardNobrdr>
    </>
  );
};

export default Details;

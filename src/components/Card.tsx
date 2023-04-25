import { Entry } from '../interfaces';

interface Props {
  podcast: Entry;
}

export const Card = ({ podcast }: Props) => {
  return (
    <>
      <div>
        <h4>{podcast.title.label}</h4>
      </div>
    </>
  );
};

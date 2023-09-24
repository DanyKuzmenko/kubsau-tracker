import { useLocation, useNavigate } from 'react-router-dom';
import { FC } from 'react';

type State = {
  state: {
    prevPageLink?: string;
  };
};

const PageNotFound: FC = () => {
  const navigate = useNavigate();
  const { state }: State = useLocation();

  let previousPageNavigateAction;

  if (state?.prevPageLink) {
    previousPageNavigateAction = () => navigate(-1);
  } else {
    previousPageNavigateAction = () => navigate('..');
  }

  return (
    <section>
      <h1>Данная страница не найдена</h1>
      <button onClick={previousPageNavigateAction}>Вернуться назад</button>
    </section>
  );
};
export default PageNotFound;

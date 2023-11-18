import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './PageNotFound.module.scss';

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
    previousPageNavigateAction = () => navigate(state.prevPageLink!);
  } else {
    previousPageNavigateAction = () => navigate('..');
  }

  return (
    <section className={styles.page}>
      <h1>Данная страница не найдена</h1>
      <button onClick={previousPageNavigateAction}>Вернуться назад</button>
    </section>
  );
};
export default PageNotFound;

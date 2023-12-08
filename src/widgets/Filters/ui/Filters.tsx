import { GroupFilter } from 'features/GroupFilter';
import { SearchInput } from 'features/SearchInput';
import { SelectedPageLinks } from 'features/SelectedPageLinks';
import { WeekButtons } from 'features/WeekButtons';

import cls from './Filters.module.scss';

type Props = {
  setDays: (state: any[]) => void;
};

const Filters = ({ setDays }: Props) => {
  return (
    <section className={cls.filters}>
      <SelectedPageLinks />

      <div className={cls.container}>
        <GroupFilter />
        <SearchInput />
        <WeekButtons setDays={setDays} />
      </div>
    </section>
  );
};

export { Filters };

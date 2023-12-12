import { GroupFilter } from 'features/GroupFilter';
import { SearchInput } from 'features/SearchInput';
import { SelectedPageLinks } from 'features/SelectedPageLinks';
import { SelectedLink } from 'features/SelectedPageLinks/ui/SelectedPageLinks';
import { WeekButtons } from 'features/WeekButtons';

import cls from './Filters.module.scss';


type Props = {
  selectedPage: SelectedLink
};

const Filters = ({selectedPage}: Props) => {
  return (
    <section className={cls.filters}>
      <SelectedPageLinks selectedPage={selectedPage}/>

      <div className={cls.container}>
        <GroupFilter />
        <SearchInput />
        <WeekButtons />
      </div>
    </section>
  );
};

export { Filters };

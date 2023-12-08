import { useState } from 'react';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';

import cls from './GroupFilter.module.scss';

type FilterStatuses = 'group' | 'classroom';

const GroupFilter = () => {
  const [filterStatus, setFilterStatus] = useState<FilterStatuses>('group');

  const isGroupActive = filterStatus === 'group';

  const handleGroupClick = (): void => {
    setFilterStatus('group');
  };

  const handleClassroomClick = (): void => {
    setFilterStatus('classroom');
  };

  return (
    <div className={cls.groupFilter}>
      <Button
        theme={ButtonTheme.TERTIARY}
        size={ButtonSize.XS}
        className={isGroupActive ? cls.active : cls.inactive}
        onClick={handleGroupClick}
      >
        По группе
      </Button>
      <Button
        theme={ButtonTheme.TERTIARY}
        size={ButtonSize.XS}
        className={!isGroupActive ? cls.active : cls.inactive}
        onClick={handleClassroomClick}
      >
        По аудитории
      </Button>
    </div>
  );
};

export { GroupFilter };

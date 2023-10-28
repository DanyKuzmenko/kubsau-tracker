import React, { FC } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

const MainLayout: FC = () => {
  return (
    <div>
      <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.M}>
        Нажать
      </Button>
      <Button theme={ButtonTheme.SECONDARY} size={ButtonSize.S}>
        Нажать
      </Button>
      <Button theme={ButtonTheme.TERTIARY} size={ButtonSize.XS}>
        Нажать
      </Button>
    </div>
  );
};

export default MainLayout;
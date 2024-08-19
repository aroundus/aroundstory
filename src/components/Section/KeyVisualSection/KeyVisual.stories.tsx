import type { Meta, StoryObj } from '@storybook/react';

import { KeyVisual } from './KeyVisual';

const meta = {
  argTypes: {},
  component: KeyVisual,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'components/Section/KeyVisualSection/KeyVisual',
} satisfies Meta<typeof KeyVisual>;

export default meta;
type Story = StoryObj<typeof meta>;

export const KeyVisualStory: Story = {
  args: {
    isButtonVisible: false,
    isGradientEnabled: true,
    post: {
      title: '공익 사업을 위한 토지 수용 시 양도소득세',
      summary:
        '양도와 관련하여 비과세 및 세액 감면을 검토해서 적용하면 많은 절세를 할 수 있습니다. 다음 사례의 경우 현금 보상을 받는 경우에 해당하여 10%의 세액 감면을 적용하였습니다.',
      path: 'https://blog.naver.com/taxaroundus/223253166812',
      thumbnailURL: 'https://cdn.pixabay.com/photo/2016/11/21/14/57/wheat-1845835_1280.jpg',
      category: '기장대리',
      categoryPath: '/category/기장대리',
      date: '2023.10.20',
      dateTime: '2023.10.20 23:31',
    },
  },
};

KeyVisualStory.storyName = 'KeyVisual';

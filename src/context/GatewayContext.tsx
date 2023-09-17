import { createContext } from 'react';

import { PlayerGateway } from '../gateways/PlayerGateway';
import { QuizGateway } from '../gateways/QuizGateway';
import { RandomQuestionsGateway } from '../gateways/RandomQuestionsGateway';

export const PlayerGatewayContext = createContext<undefined | PlayerGateway>(undefined);

export const QuizGatewayContext = createContext<undefined | QuizGateway>(undefined);

export const RandomQuestionsGatewayContext = createContext<undefined | RandomQuestionsGateway>(undefined);

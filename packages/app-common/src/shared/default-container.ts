import { Container } from 'inversify';

export class DefaultContainer {
  static instance = new Container({ defaultScope: 'Singleton' });
}
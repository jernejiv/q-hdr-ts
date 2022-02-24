import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
@Module({namespaced: true})
class GlobalStoreDecorators extends VuexModule {
  title = '';
  @Mutation
  public SET_TITLE(newTitle: string): void {
    this.title = newTitle;
  }
  @Action
  public setTitle(newTitle: string): void {
    this.context.commit('SET_TITLE',newTitle);
  }
  get titleUpperCase(): string {
    return this.title.toUpperCase();
  }
}

export default GlobalStoreDecorators;

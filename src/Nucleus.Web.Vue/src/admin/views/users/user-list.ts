import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import UserAppService from '../../../services/user-app-service';

@Component
export default class UserListComponent extends Vue {
    public pagedListOfUserListDto: IPagedList<IUserListInput> = {
        totalCount: 0,
        items: [],
    };
    public userAppService = new UserAppService();

    public mounted() {
        const userListInput: IUserListInput = {
            filter: '',
        };

        this.userAppService.getAll(userListInput).then((response) => {
            this.pagedListOfUserListDto = response.content as IPagedList<IUserListInput>;
        });
    }
}

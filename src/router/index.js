import Vue from 'vue';
import Router from 'vue-router';
import * as Views from '@/views';
import { User } from '@/components';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Views.Login,
      meta: {
        identity: 'student'
      },
    },
    {
      path: '/:identity',
      name: 'user',
      component: Views.User,
      children: [
        {
          name: 'home',
          path: 'home',
          component: User.Common.Home
        },
        {
          name: 'notification',
          path: 'notification',
          component: User.Common.Notification
        },
        {
          name: 'user-settings',
          path: 'user-settings',
          component: User.Common.UserSettings
        },
        {
          name: 'data-share',
          path: 'data-share',
          component: User.Common.DataShare
        },
        {
          name: 'my-teacher',
          path: 'my-teacher',
          component: User.Student.MyTeacher
        },
        {
          name: 'choose-teacher',
          path: 'choose-teacher',
          component: User.Student.ChooseTeacher
        },
        {
          name: 'submit-report',
          path: 'submit-report',
          component: User.Student.SubmitReport
        },
        {
          name: 'choose-students',
          path: 'choose-students',
          component: User.Teacher.ChooseStudents
        },
        {
          name: 'my-students',
          path: 'my-students',
          component: User.Teacher.MyStudents
        },
        {
          name: 'review-report',
          path: 'review-report',
          component: User.Teacher.ReviewReport
        },
        {
          name: 'reply-schedule',
          path: 'reply-schedule',
          component: User.Admin.ReplySchedule
        },
        {
          name: 'account-manage',
          path: 'account-manage',
          component: User.Admin.AccountManage
        },
        {
          name: 'publish-notice',
          path: 'publish-notice',
          component: User.Admin.PublishNotice
        },
        {
          name: 'system-settings',
          path: 'system-settings',
          component: User.Admin.SystemSettings
        }
      ]
    },
    {
      path: '*',
      name: 'not-found',
      component: Views.NotFound,
    },
  ],
});

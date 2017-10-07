import Vue from 'vue'

/**
 * Typings作成面倒なので必要なものだけ拡張しておく
 */
export default class VueBuefy extends Vue {
    $dialog: any;
    $loading: any;
    $modal: any;
    $snackbar: any;
    $toast: any;
}

export enum Role{
    SUPERADMIN='SUPERADMIN',
    ADMIN='ADMIN',
    CBX='CBX',
    HTCBX='HTCBX'
}

export enum APIErrorCode {
    Unauthorized = 'unauthorized_error',
    Forbidden = 'forbidden_error',
    NotFound = 'not_found_error',
    InternalServerError = 'internal_server_error',
  }
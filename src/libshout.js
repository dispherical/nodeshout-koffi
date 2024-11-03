const koffi = require('koffi');

const libshout = koffi.load('libshout.so');

const shout_init = libshout.func('int shout_init()');
const shout_shutdown = libshout.func('void shout_shutdown()');
const shout_version = libshout.func('string shout_version(char*, char*, char*)');
const shout_new = libshout.func('void* shout_new()');
const shout_free = libshout.func('void shout_free(void*)');
const shout_set_host = libshout.func('int shout_set_host(void*, string)');
const shout_set_port = libshout.func('int shout_set_port(void*, int)');
const shout_set_user = libshout.func('int shout_set_user(void*, string)');
const shout_set_password = libshout.func('int shout_set_password(void*, string)');
const shout_set_mount = libshout.func('int shout_set_mount(void*, string)');
const shout_set_format = libshout.func('int shout_set_format(void*, int)');
const shout_set_protocol = libshout.func('int shout_set_protocol(void*, int)');
const shout_set_nonblocking = libshout.func('int shout_set_nonblocking(void*, int)');
const shout_open = libshout.func('int shout_open(void*)');
const shout_close = libshout.func('int shout_close(void*)');
const shout_send = libshout.func('int shout_send(void*, void*, int)');
const shout_sync = libshout.func('void shout_sync(void*)');
const shout_delay = libshout.func('int shout_delay(void*)');
const shout_set_metadata = libshout.func('int shout_set_metadata(void*, void*)');
const shout_metadata_new = libshout.func('void* shout_metadata_new()');
const shout_metadata_free = libshout.func('void shout_metadata_free(void*)');
const shout_metadata_add = libshout.func('int shout_metadata_add(void*, string, string)');

module.exports = {
    shout_init,
    shout_shutdown,
    shout_version,
    shout_new,
    shout_free,
    shout_set_host,
    shout_set_port,
    shout_set_user,
    shout_set_password,
    shout_set_mount,
    shout_set_format,
    shout_set_protocol,
    shout_set_nonblocking,
    shout_open,
    shout_close,
    shout_send,
    shout_sync,
    shout_delay,
    shout_set_metadata,
    shout_metadata_new,
    shout_metadata_free,
    shout_metadata_add
};
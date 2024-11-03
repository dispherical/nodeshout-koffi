const libshout = require('./libshout');

/**
 * Base class for shout_t structure. 
 */
class ShoutT {
    constructor() {
        this.ptr = libshout.shout_new();
    }

    /**
     * Sets the server hostname or IP address. The default is localhost.
     * @param {string} host
     * @return {number}
     */
    setHost(host) {
        return libshout.shout_set_host(this.ptr, host);
    }

    /**
     * Sets the server port. The default is 8000.
     * @param {number} port
     * @return {number}
     */
    setPort(port) {
        return libshout.shout_set_port(this.ptr, port);
    }

    /**
     * Sets the user to authenticate as, for protocols that can use this parameter.
     * The default is source.
     * @param {string} user
     * @return {number}
     */
    setUser(user) {
        return libshout.shout_set_user(this.ptr, user);
    }

    /**
     * Sets the password to authenticate to the server with. This parameter must be set.
     * There is no default.
     * @param {string} password
     * @return {number}
     */
    setPassword(password) {
        return libshout.shout_set_password(this.ptr, password);
    }

    /**
     * Sets the mount point for this stream, for protocols that support this option (SHOUT_PROTOCOL_ICY doesn't).
     * @param {string} mount
     * @return {number}
     */
    setMount(mount) {
        return libshout.shout_set_mount(this.ptr, mount);
    }

    /**
     * Sets the audio format of this stream. (0=ogg, 1=mp3)
     * The currently supported formats are listed in Format Constants. The default is SHOUT_FORMAT_VORBIS.
     * @param {number} format
     * @return {number}
     */
    setFormat(format) {
        return libshout.shout_set_format(this.ptr, format);
    }

    /**
     * Set the protocol with which to connect to the server. Supported protocols are listed in Protocol Constants.
     * The default is SHOUT_PROTOCOL_HTTP (compatible with Icecast 2).
     * @param {number} protocol
     * @return {number}
     */
    setProtocol(protocol) {
        return libshout.shout_set_protocol(this.ptr, protocol);
    }

    /**
     * Sets the connection mode to non-blocking if set to true. If set to false, operates in blocking mode.
     * @param {boolean} nonblocking
     * @return {number}
     */
    setNonblocking(nonblocking) {
        return libshout.shout_set_nonblocking(this.ptr, nonblocking);
    }

    /**
     * Opens a connection to a server. All connection parameters must have been set prior to this call.
     * @return {number}
     */
    open() {
        return libshout.shout_open(this.ptr);
    }

    /**
     * Closes a connection to the server.
     * @return {number}
     */
    close() {
        return libshout.shout_close(this.ptr);
    }

    /**
     * Sends length bytes of audio data from the buffer pointed to by data to the server.
     * The connection must already have been established by a successful call to shout_open.
     * @param {Buffer} buffer
     * @param {number} length
     * @return {number}
     */
    send(buffer, length) {
        return libshout.shout_send(this.ptr, buffer, length);
    }

    /**
     * Causes the caller to sleep for the amount of time necessary to play back audio sent since
     * the last call to shout_sync. Should be called before every call to shout_send to ensure
     * that audio data is sent to the server at the correct speed. Alternatively, the caller may
     * use shout_delay to determine the number of milliseconds to wait and delay itself.
     */
    sync() {
        return libshout.shout_sync(this.ptr);
    }

    /**
     * Returns the number of milliseconds the caller should wait before calling shout_send again.
     * This function is provided as an alternative to shout_sync for applications that may wish
     * to do other processing in the meantime.
     * @return {number}
     */
    delay() {
        return libshout.shout_delay(this.ptr);
    }

    /**
     * Sets metadata on the connection self to metadata. Only MP3 streams
     * support this type of metadata update. You may use this function on
     * defined but closed connections (this is useful if you simply want to
     * set the metadata for a stream provided by another process).
     * @param {MetadataT} metadata
     * @return {number}
     */
    setMetadata(metadata) {
        return libshout.shout_set_metadata(this.ptr, metadata.ptr);
    }

    /**
     * Sets a stream audio parameter (eg bitrate, samplerate, channels or quality). The currently defined parameters
     * are listed in the Audio Info Constants section, but you are free to add additional fields if your
     * directory server understands them.
     * @param {string} key
     * @param {string} value
     * @return {number}
     */
    setAudioInfo(key, value) {
        const metadata = libshout.shout_metadata_new();
        libshout.shout_metadata_add(metadata, key, value);
        libshout.shout_set_metadata(this.ptr, metadata);
        libshout.shout_metadata_free(metadata);
    }
}

module.exports = ShoutT;

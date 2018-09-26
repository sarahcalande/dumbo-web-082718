class PlaylistingsController < ApplicationController

  def new
    @all_songs = Song.all
    @all_playlists = Playlist.all
    @playlisting = Playlisting.new
  end


  def create
    @playlisting_params = params.require(:playlisting).permit(:song_id, :playlist_id)
    @playlisting = Playlisting.create(@playlisting_params)
    redirect_to @playlisting.playlist
  end


end

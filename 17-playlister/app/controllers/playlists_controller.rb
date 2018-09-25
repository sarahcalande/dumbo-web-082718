class PlaylistsController < ApplicationController

  before_action :fetch_playlist, only: [:edit, :update, :delete]

  def index
    @playlists = Playlist.all
  end

  def show
    @all_songs = Song.all
    @all_playlists = Playlist.all
    @playlist = Playlist.includes(:songs).find(params[:id])
  end

  def new
    @playlist = Playlist.new
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if (@playlist.save)
      redirect_to @playlist
    else
      render :new
    end
  end

  def edit
  end

  def update
    if (@playlist.update(playlist_params))
      redirect_to @playlist
    else
      render :edit
    end
  end

  def delete
    redirect_to playlists_path
  end

  private
  def fetch_playlist
    @playlist = Playlist.find(params[:id])
  end

  def playlist_params
    params.require(:playlist).permit(:name)
  end

end
